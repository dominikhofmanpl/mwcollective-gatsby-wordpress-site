import React from 'react'
import { gql, useQuery } from '@apollo/client'
import AboutWorkers from './aboutworkers'
import ReactHtmlParser, {  } from 'react-html-parser'
import Loading from '../loading'

const GET_ALL_WORKERS_DETAILS = gql`
    query MyQuery {
        pageBy(uri: "about-page") {
            workers_details {
                workers {
                    workerImg {
                        sourceUrl
                    }
                    fullnameWorker
                    fullDescWorker
                }
            }
        }
    }
`

const WorkersBox = () => {
    const { data, loading, error } = useQuery(GET_ALL_WORKERS_DETAILS)

    if (loading) return <Loading></Loading>
    if (error) return 'Data error...'

    return (
        <div className="container py-4 lg:py-16 px-12 lg:px-24">
            {data.pageBy.workers_details.workers.map(worker => (
                <AboutWorkers
                    aboutimage={worker.workerImg.sourceUrl}
                    name={worker.fullnameWorker}
                    description={ReactHtmlParser(worker.fullDescWorker)}>
                </AboutWorkers>
            ))}
        </div>
    )
}

export default WorkersBox