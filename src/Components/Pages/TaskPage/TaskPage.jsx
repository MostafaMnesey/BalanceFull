import SearchBar from "./SearchBar/SearchBar";
import TaskInfo from "./TaskInfo/TaskInfo";
import TaskProgress from "./TaskProgress/TaskProgress";

export default function TasksPage() {
    return <>
        <TaskInfo />
        <SearchBar />
        <TaskProgress/>
    </>
}
