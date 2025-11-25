function AvaterPlaceholder({ name }) {
    return (
        <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span className="text-xs">
                    {name.toLocaleUpperCase().substring(0, 2)}
                </span>
            </div>
        </div>
    );
}

export default AvaterPlaceholder;
