package com.example.taskmicroservicejava.Services;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.example.taskmicroservicejava.Repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public void createTask(){
        TaskModel task = TaskModel.builder()
                .description("uwu")
                .priority("uwu")
                .status("uwu")
                .dueDate("uwu")
                .userId("uwu")
                .build();
        taskRepository.save(task);
    }
}
