package com.example.taskmicroservicejava.Utils;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskResponse {
    @JsonProperty("message")
    private String message;
    @JsonProperty("tasks")
    private List<TaskModel> task;
}
