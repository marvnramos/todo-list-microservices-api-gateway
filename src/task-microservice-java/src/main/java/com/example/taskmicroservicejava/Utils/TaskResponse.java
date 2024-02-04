package com.example.taskmicroservicejava.Utils;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.fasterxml.jackson.annotation.JsonInclude;
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
    @JsonInclude(JsonInclude.Include.NON_NULL) // debe excluir la propiedad tasks si su valor es null.
    private List<TaskModel> tasks;

    @JsonProperty("task")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private TaskModel task;

}
