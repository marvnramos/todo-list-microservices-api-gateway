package com.example.taskmicroservicejava.Repositories;

import com.example.taskmicroservicejava.Models.TaskModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.config.Task;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TaskRepository extends JpaRepository<TaskModel, Long> {
    Optional<TaskModel> findById(UUID id);
    TaskModel getById(UUID id);
    List<TaskModel> getByUserId(String userId);

}
