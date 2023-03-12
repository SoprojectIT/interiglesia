export default function SystemHome() {
  let worshipname = process.env.WORSHIP_NAME;

    return <>
    <h2>Sistema {worshipname}</h2>
    </>
}