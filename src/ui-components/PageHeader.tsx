import { useRouter } from 'next/router'

type PageHeaderProps = {
  aToggled: boolean
}

const PageHeader = ({ aToggled }: PageHeaderProps) => {
  const router = useRouter()

  const handleClick = (currentPageA: boolean) => {
    router.push(currentPageA ? '/pagea' : '/pageb')
  }

  return (
    <>
      <div>
        <button
          onClick={() => handleClick(true)}
          style={{ backgroundColor: aToggled ? 'yellow' : 'white' }}
        >
          A
        </button>
        <button
          onClick={() => handleClick(false)}
          style={{ backgroundColor: !aToggled ? 'yellow' : 'white' }}
        >
          B
        </button>
      </div>
    </>
  )
}

export default PageHeader
