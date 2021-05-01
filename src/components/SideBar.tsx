import {Button} from "./Button";
import React from "react";

interface Genre {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface GenreResponseProps {
    genres: Genre[];
    selectedGenreId: Number;
    clickButton: Function;
}

export function SideBar(props: GenreResponseProps) {

    function handleClickButton(id: number) {
        props.clickButton(id);
    }

    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {props?.genres.map(genre => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={props.selectedGenreId === genre.id}
                    />
                ))}
            </div>

        </nav>
    )
}
