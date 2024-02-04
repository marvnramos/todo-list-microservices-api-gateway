package com.example.taskmicroservicejava.Controllers;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.example.taskmicroservicejava.Services.TaskService;
import com.example.taskmicroservicejava.Utils.TaskResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/tasks")
@RequiredArgsConstructor
public class TaskController {

    @GetMapping(path = "/")
    public ResponseEntity<TaskResponse> getTasks(){
        TaskResponse response = new TaskResponse();
        TaskModel task = new TaskModel();

        response.setMessage("\uD83E\uDD75");
        response.setTask(task);

        var res = ResponseEntity.ok(response);
        return res;
    }
}
