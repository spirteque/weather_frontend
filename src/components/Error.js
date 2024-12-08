export default function Error({message = "Something went wrong. Please try again later."}) {
	return (
		<div className="alert alert-danger" role="alert">
			{message}
		</div>
	)
}