package com.example.taskmicroservicejava.Utils;

import com.example.taskmicroservicejava.Models.TaskModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.ast.Var;
import org.springframework.scheduling.config.Task;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskResponse {
    private String message;
    private TaskModel task;

    public String getMessage() {
        return message;
    }
    public TaskModel getTask() {
        return task;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public void setTask(TaskModel task) {
        this.task = task;
    }

}
