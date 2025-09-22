function SkillList ({items}) {

    const listItems = items.map((item, index) => (
        <li key={item.id || index}>
            {item.name || item}
        </li>
    ))
}

// this component has not been completed nor is it in use. Probably ok to delete