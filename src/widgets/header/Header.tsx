import React, {useCallback} from 'react'
import {useLocation, useNavigate} from 'react-router'
import {Link} from 'react-router-dom'

import {Layout} from 'shared/ui/layout'

interface NavItem {
  to: string
  title: string
}

const navItems: NavItem[] = [
  {
    to: '/',
    title: 'anime',
  },
  {
    to: '/manga',
    title: 'manga',
  },
  {
    to: '/news',
    title: 'news',
  },
  {
    to: '/about',
    title: 'about',
  },
]

const Header: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const goToMain = useCallback(() => navigate('/'), [navigate])

  return (
    <Layout.Header className="grid grid-cols-3 gap-2 items-center w-full">
      <div onClick={goToMain}>Header</div>
      <div className="flex grow justify-center">
        {navItems.map((item, index) => (
          <Link
            key={index}
            className="uppercase text-sm w-20 text-center"
            style={{
              fontWeight: location.pathname === item.to ? 'bold' : undefined,
            }}
            to={item.to}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div></div>
    </Layout.Header>
  )
}

export default Header
