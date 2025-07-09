type DetailProps = {
    label: string
    value?: string | null
}

function Detail({ label, value }: DetailProps) {
    return (
        <div className="w-full flex justify-between border-b pb-2">
            <span className="font-medium text-gray-700">{label}:</span>
            <span className="text-gray-900">{value || '-'}</span>
        </div>
    )
}

export default Detail
