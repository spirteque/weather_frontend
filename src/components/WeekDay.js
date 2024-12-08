export default function WeekDay({day}) {
	switch (day) {
		case "MONDAY": return (<span>Mon</span>);
		case "TUESDAY": return (<span>Tue</span>);
		case "WEDNESDAY": return (<span>Wed</span>);
		case "THURSDAY": return (<span>Thu</span>);
		case "FRIDAY": return (<span>Fri</span>);
		case "SATURDAY": return (<span>Sat</span>);
		case "SUNDAY": return (<span>Sun</span>);
	}
}