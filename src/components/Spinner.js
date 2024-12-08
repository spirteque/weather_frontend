export default function Spinner({fullHeight}) {
	const containerClassName = `d-flex justify-content-center align-items-center ${fullHeight ? "h-100" : ""}`;

	return (
		<div className={containerClassName}>
			<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}