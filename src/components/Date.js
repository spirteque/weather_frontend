export default function Date({date}) {
	if (date) {
		const displayDate = date.split('-').reverse().join('/')

		return (<span>{displayDate}</span>)
	}
}