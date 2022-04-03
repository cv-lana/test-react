import ContentLoader from "react-content-loader";

export const Loading = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 530 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="8" ry="8" width="530" height="100" />
    </ContentLoader>
  )
}