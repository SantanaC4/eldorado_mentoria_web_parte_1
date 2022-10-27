const RepoItem: React.FC<{repositoryName: string}> = (props) => {
    return <li>{props.repositoryName}</li>
}

export default RepoItem;