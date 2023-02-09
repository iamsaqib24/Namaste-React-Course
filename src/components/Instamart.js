import { useState } from "react"

const Section = ({title, description, isVisible, setIsVisible}) => {

    // const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="border border-black p-2 m-2" >
            <h3 className="text-xl font-bold">{title}</h3>
            {
                isVisible ? (<button className="underline" onClick={() => setIsVisible(false) }>hide</button>)
                    : (<button className="underline" onClick={() => setIsVisible(true) }>show</button>)
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {

    const [sectionConfig, setSectionConfig] = useState({
        showAbout: false,
        showTeam: false,
        showCareers: false
    })

    return (
        <div>
            <h1 className="font-bold text-3xl p-2 m-2 text-center">Instamart Page</h1>
            <Section
                title={"About Instamart"}
                description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                isVisible={sectionConfig.showAbout}
                setIsVisible={() => setSectionConfig({
                    showAbout: true,
                    showTeam: false,
                    showCareers: false
                })}/>
            <Section
                title={"Team Instamart"}
                description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                isVisible={sectionConfig.showTeam}
                setIsVisible={() => setSectionConfig({
                    showAbout: false,
                    showTeam: true,
                    showCareers: false
                })}/>
            <Section
                title={"Careers"}
                description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                isVisible={sectionConfig.showCareers}
                setIsVisible={() => setSectionConfig({
                    showAbout: false,
                    showTeam: false,
                    showCareers: true
                })}/>


        </div>
    )
}

export default Instamart
