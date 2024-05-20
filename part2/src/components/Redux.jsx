
const Redux = ({parts}) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
    return(
        <b>
            Total of {totalExercises} exercises
        </b>
    )
}

export default Redux