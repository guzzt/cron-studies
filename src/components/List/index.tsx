import React from 'react';
import style from './List.module.scss'

function List(){
	const tasks = [
		{
			name: "React",
			time: '02:00:00'
		},
		{
			name: "JavaScript",
			time: '01:00:00'
		},
		{
			name: "Python",
			time: '04:00:00'
		},
	]
	return (
		<aside className={style.listaTarefas}>
			<h2>Tarefas do dia</h2>
			<ul>
				{tasks.map((task, index) => (
					<li key={index} className={style.item}>
						<h3>{task.name}</h3>
						<span>{task.time}</span>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default List;