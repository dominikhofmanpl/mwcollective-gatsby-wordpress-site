import * as React from 'react'
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import iconService from '../../assets/services-icon.svg'
import ServiceItem from '../startpage/serviceitem'
import ReactHtmlParser, {  } from 'react-html-parser'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
        pageBy : {
            services_box : {
                servicesBox : {
                    iconService : {
                        sourceUrl
                    },
                    titleService,
                    contentService
                }
            }        
        }
    })
  )
})
describe("Service", () => {
  it("renders correctly", () => {
    const data = {
        pageBy : {
            services_box : {
                servicesBox : {
                    iconService : {
                        sourceUrl: `${iconService}`,
                    },
                    titleService: `Wnętrza`,
                    contentService: `Nunc porta diam ex, vel laoreet nisl placerat sit amet. Praesent pulvinar auctor nisi, sodales consequat arcu tincidunt id. Phasellus condimentum nunc in lectus lacinia rutrum id eu lorem.`
                }
            }        
        }
    }
    const tree = renderer.create(<ServiceItem
            serviceIcon={data.pageBy.services_box.servicesBox.iconService}
            serviceTitle={data.pageBy.services_box.servicesBox.titleService}
            serviceDescription={ReactHtmlParser(data.pageBy.services_box.servicesBox.contentService)}
        ></ServiceItem>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})