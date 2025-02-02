import './Content.sass'

const Content = (props) => {
  const {children} = props
  return (
    <main className="content">
      {children}
    </main>
  )
}

export default Content