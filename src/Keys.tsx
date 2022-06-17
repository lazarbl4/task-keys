import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [name, setName] = useState('');
    const [id, setID] = useState(0);

    if (props.sorting == 'ASC') props.initialData.sort((a, b) => a.id - b.id);
    else props.initialData.sort((a, b) => b.id - a.id);

    return (
        <div>
            {props.initialData.map((user) => {
                if (user.id == id) {
                    return (
                        <input
                            autoFocus={true}
                            onChange={(e) => setName(e.currentTarget.value)}
                            key={user.id}
                            defaultValue={user.name}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    user.name = name;
                                    setID(0);
                                }
                                if (e.key == 'Escape') {
                                    setID(0);
                                }
                            }}
                        />
                    );
                } else {
                    return (
                        <div onClick={() => setID(user.id)} key={user.id}>
                            {user.name}
                        </div>
                    );
                }
            })}
        </div>
    );
}
