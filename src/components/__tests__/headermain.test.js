import * as React from 'react'
import testphoto from '../../assets/fonts/break.jpg'
import renderer from "react-test-renderer"

import HeaderMain from "../headermain"
import { StaticQuery } from 'gatsby'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      pageBy : {
        subpageFields : {
          subpageCover : {
              sourceUrl
          },
            subpageTitle,
            subpageDesc,
            callToActionName,
            callToActionSlug
          }
      }
    })
  )
})
describe("Index", () => {
  it("renders correctly", () => {
    const data = {
      pageBy : {
        subpageFields : {
          subpageCover : {
              sourceUrl: `${testphoto}`
          },
            subpageTitle: 'mniej znaczy więcej',
            subpageDesc: 'testowy opis',
            callToActionName: 'czytaj więcej',
            callToActionSlug: '/czytaj'
          }
      }
    }
    const tree = renderer.create(<HeaderMain 
          HeaderImage={data.pageBy.subpageFields.subpageCover}
          pageTitle={data.pageBy.subpageFields.subpageTitle}
          pageDescription={data.pageBy.subpageFields.subpageDesc}
          height="70vh">
        </HeaderMain>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})