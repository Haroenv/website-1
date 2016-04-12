export default function dateFilter(date) {
  if (!date) return date;
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
