package com.example.taskmicroservicejava.Controllers;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.example.taskmicroservicejava.Services.TaskService;
import com.example.taskmicroservicejava.Utils.TaskResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

            res.setTasks(tasks);
            res.setMessage("Here you go! 🤓");

            return ResponseEntity.ok(res);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(path = "/create")
    public ResponseEntity<TaskResponse> create(@RequestBody TaskModel task){
        try {
            TaskResponse res = new TaskResponse();
            TaskModel newTask = taskService.createTask(task);

            res.setTask(newTask);
            res.setMessage("Task created successfully! 🥵");

            return ResponseEntity.ok(res);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
