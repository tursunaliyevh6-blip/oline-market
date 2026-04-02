export const useGetNotify = () => {
  const notify = (ok, err) => {
    console.log(ok, err)
  }

  return notify
}