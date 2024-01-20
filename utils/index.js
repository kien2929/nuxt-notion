export const formatDateTime = (inputDateTime) => {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }
  const dateObject = new Date(inputDateTime)
  const formattedDateTime = dateObject.toLocaleString("en-US", options)

  return formattedDateTime;
}
