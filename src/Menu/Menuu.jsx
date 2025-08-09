import { Text } from "./Menuu.js"
import { Title } from "./Menuu.js"
import { Img } from "./Menuu.js"
import { DescriptionList } from "./Menuu.js"
import { DescriptionItem } from "./Menuu.js";
import { DifficultyList } from "./Menuu.js";
import { DifficultyItem } from "./Menuu.js";

export const Menuu = ({ img, title, time, servings, calories, difficulty }) => {
    return (
        <div>
            <Img src={img} alt="#" />
            <Title>{title}</Title>
            <DescriptionList>
                <DescriptionItem>
                    <Text>{time}</Text>
                </DescriptionItem>
                <DescriptionItem>
                    <Text>{servings}</Text>
                </DescriptionItem>
                <DescriptionItem>
                    <Text>{calories}</Text>
                </DescriptionItem>
            </DescriptionList>
            <div>
                <h3 style={{color: 'red'}}>Difficulty</h3>
                <DifficultyList>
                    <DifficultyItem style={{ backgroundColor: difficulty === 'Easy' ? 'rgba(255, 198, 107, 0.98)' : 'rgba(255, 174, 0, 0.17)' }}>Easy</DifficultyItem>
                    <DifficultyItem style={{ backgroundColor: difficulty === 'Medium' ? 'rgba(226, 107, 16, 0.81)' : 'rgba(255, 174, 0, 0.17)' }}>Medium</DifficultyItem>
                    <DifficultyItem style={{ backgroundColor: difficulty === 'Hard' ? 'rgba(255, 34, 34, 0.66)' : 'rgba(255, 174, 0, 0.17)' }}>Hard</DifficultyItem>
                </DifficultyList>
            </div>
            </div>

    )
}