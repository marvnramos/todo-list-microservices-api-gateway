package com.example.taskmicroservicejava.Controllers;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.example.taskmicroservicejava.Services.TaskService;
import com.example.taskmicroservicejava.Utils.TaskResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/tasks")
public class TaskController {
    private final TaskService taskService;
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(path = "/")
    public ResponseEntity<TaskResponse> getTasks(){
        try{
            TaskResponse res = new TaskResponse();
            List<TaskModel> tasks = taskService.getAllTasks();

            res.setTask(tasks);
            res.setMessage("Here you go! 🤓");

            return ResponseEntity.ok(res);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
