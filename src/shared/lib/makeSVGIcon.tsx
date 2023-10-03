import React from 'react'

const SvgIcon = React.forwardRef<SVGSVGElement, {children: React.ReactNode}>(function SvgIcon(
  props,
  ref,
) {
  return (
    <svg
      className="w-[1em] h-[1em] font-black"
      fill="currentColor"
      {...props}
      ref={ref}
      viewBox="0 0 24 24"
    >
      {props.children}
    </svg>
  )
})

// eslint-disable-next-line no-undef
export const makeSvgIcon = (path: JSX.Element) => {
  // @ts-ignore
  const Component = (props, ref) => (
    <SvgIcon ref={ref} {...props}>
      {path}
    </SvgIcon>
  )

  return React.memo(React.forwardRef(Component))
}
