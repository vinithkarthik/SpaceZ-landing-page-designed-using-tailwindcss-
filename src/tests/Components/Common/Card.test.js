import { render, screen } from '@testing-library/react';
import Card from '../../../Components/Common/Card';

describe('Card', () => {
    test('Card: render component', () => {
        render(
                <Card 
                    id={"americanChampion"}
                    name={"American champion"}
                    image={"url"}
                    type={"Tug"}
                    info={"Port of Los Angeles"}
                />
        );
    })
    test('Card: Ship Type display', () => {
        render(
                <Card 
                    id={"americanChampion"}
                    name={"American champion"}
                    image={"url"}
                    type={"Tug"}
                    info={"Port of Los Angeles"}
                />
        );
        screen.getByText('Tug')
    })
    test('Card: render img', () => {
        render(
                <Card 
                    id={"americanChampion"}
                    name={"American champion"}
                    image={"url"}
                    type={"Tug"}
                    info={"Port of Los Angeles"}
                />
        );
        screen.getByAltText('ship')
    })
})