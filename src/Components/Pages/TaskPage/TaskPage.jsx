import SearchBar from "./SearchBar/SearchBar";
import TaskInfo from "./TaskInfo/TaskInfo";
import TaspProgress from "./TaspProgress/TaspProgress";

export default function TasksPage() {
    return <>
        <TaskInfo />
        <SearchBar />
        <TaspProgress/>
    </>
}
