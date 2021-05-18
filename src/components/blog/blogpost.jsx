import { Link } from 'gatsby'
import React from 'react'

const BlogPost = ({name, description, aboutimage, dateRelease, addedBy, bloghref}) => (
    <div className="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 container my-16">
        <div className="flex flex-col my-auto">
            <h2 className="mont-black my-3" style={{
                fontSize: `1.8rem`
            }}>{name}</h2>
            <div className="flex flex-row">
                <p className="inriasans-reg my-2 mr-5" style={{
                    lineHeight: `1.6rem`
                }}>
                    Dodano: {dateRelease}
                </p>
                <p className="inriasans-reg my-2" style={{
                    lineHeight: `1.6rem`
                }}>
                    przez {addedBy}
                </p>
            </div>
            <p className="inriasans-reg my-5" style={{
                width: `80%`,
                lineHeight: `1.6rem`
            }}>
                {description}
            </p>
            <div class="button mr-auto bg-black uppercase hover:bg-gray-800 text-white inriasans-reg py-2 px-5 rounded-full" style={{
                fontSize: `.8rem`
            }}>
                <Link to={bloghref}>Czytaj więcej</Link>
            </div>
        </div>
        <img src={aboutimage} alt="zdjęcie"/>
    </div>
)

export default BlogPost