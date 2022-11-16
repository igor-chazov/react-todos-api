export default function getFormattedDate(timeStamp: Date) {
  const created = new Date(timeStamp);
  const date = created.toLocaleDateString();
  const time = created.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' });
  return `${time} ${date}`;
}
