import * as React from 'react'
import { render } from "@testing-library/react"
import Button from '../button'

describe(`Button`, () => {
  it(`renders Button component`, () => {
    const label = "czytaj więcej"
    const location = "ml-auto"
    const slugaction = "http://localhost:8000/#oferta"
    const { getByText } = render(
        <Button label={label}
        location={location}
        slugaction={slugaction}></Button>
    )

    const getlabel = getByText(label, location, slugaction)

    expect(getlabel).toBeInTheDocument()
  })
})