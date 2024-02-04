package com.example.taskmicroservicejava.Services;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.example.taskmicroservicejava.Repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    public List<TaskModel> getAllTasks() throws Exception{
        try {
            return taskRepository.findAll();
        }catch (Exception e){
            throw new Exception("Error getting tasks! 🥺", e);
        }
    }
//    public void createTask(){
//        TaskModel task = TaskModel.builder()
//                .description("uwu")
//                .priority("uwu")
//                .status("uwu")
//                .dueDate("")
//                .userId("uwu")
//                .build();
//        taskRepository.save(task);
//    }
}
