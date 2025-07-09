import axios, { AxiosError } from 'axios'
import type { AxiosRequestConfig } from 'axios'

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
export const API_HOST = `http://localhost:3000`

export class ApiError extends Error {
    code: string
    status: number | string
    request: AxiosRequestConfig<any>
    sentryCode?: string

    constructor(request: AxiosRequestConfig<any>, status: number | string, code: string, sentryCode?: string) {
        super('ApiError')
        this.code = code
        this.status = status
        this.request = request
        this.sentryCode = sentryCode
    }

    toString() {
        return ['[ApiError] An error occurred at this request :', `${this.request.method} ${this.request.url} - body : ${JSON.stringify(this.request.data ?? {})}`].join('\n')
    }
}

export async function request<Response = any, Body = any>(method: Method, url: string, body?: Body, options: { cachable: boolean } = { cachable: false }): Promise<Response> {
    const start = Date.now()
    let status: string | number = 200

    const fullUrl = url.startsWith('/') ? `${API_HOST}${url}` : url

    let errorCode = ''

    const request: AxiosRequestConfig<any> = {
        method,
        data: body,
        url: fullUrl,
        headers: {
            'Content-Type': body instanceof FormData ? 'multipart/form-data' : 'application/json',
        },
    }

    try {
        const { data } = await axios(request)

        return data as Response
    } catch (err: any) {
        const error = err as AxiosError
        status = error?.response?.status || 'Unknown'

        const statusCode = status
        const errorText: string | undefined = (error?.response?.data as any)?.error
        errorCode = ` ${errorText}`

        throw new ApiError(request, statusCode, errorText ?? 'Unknown error')
    } finally {
        const end = Date.now()
        const time = end - start

        const colorizedStatus = (status: number | string) => {
            const green = '\u001b[32m'
            const red = '\u001b[31m'
            const yellow = '\u001b[33m'
            const blue = '\u001b[34m'
            const reset = '\u001b[0m'

            if (typeof status === 'number' && status >= 100 && status < 200) {
                return `${blue}${status}${reset}`
            } else if (typeof status === 'number' && status >= 200 && status < 300) {
                return `${green}${status}${reset}`
            } else if (typeof status === 'number' && status >= 300 && status < 400) {
                return `${yellow}${status}${reset}`
            }

            return `${red}${status}${errorCode}${reset}`
        }

        // eslint-disable-next-line no-console
        // console.log(`%s - %s %s - %d ms`, colorizedStatus(status), method, fullUrl, time);
    }
}

export async function fetcher(url: string | string[]) {
    const response = await request<unknown, void>('GET', Array.isArray(url) ? url.join('') : url)

    return response
}
