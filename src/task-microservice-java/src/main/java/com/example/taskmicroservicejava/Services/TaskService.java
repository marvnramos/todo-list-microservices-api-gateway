package com.example.taskmicroservicejava.Services;

import com.example.taskmicroservicejava.Models.TaskModel;
import com.example.taskmicroservicejava.Repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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

    public List<TaskModel> getTasksByUserId(String userId) throws Exception{
        try {
            return taskRepository.getByUserId(userId);
        }catch (Exception e){
            throw new Exception("Error getting tasks!", e);
        }
    }

    public TaskModel getTaskById(UUID id)throws Exception{
        try {
            return taskRepository.getById(id);
        }catch (Exception e){
            throw new Exception("Error getting task! 😭");
        }
    }

    public TaskModel createTask(TaskModel task)throws Exception{
        try{
            return  taskRepository.save(task);
        }catch (Exception e){
            throw new Exception("Error creating task! 🥺", e);
        }
    }
    public TaskModel deleteTask(UUID id)throws  Exception{
        try{
            TaskModel taskToDelete = taskRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Task not found! 😨 Id: " + id));

            taskRepository.delete(taskToDelete);
            return taskToDelete;
        }catch (Exception e){
            throw new Exception("Error deleting task! 😨");
        }
    }

    public TaskModel updateTask(TaskModel task) throws Exception {
        try {
            TaskModel existingTask = taskRepository.findById(task.getId())
                    .orElseThrow(() -> new RuntimeException("Task not found! 😨 Id: " + task.getId()));

            if(task.getDescription() != null && !task.getDescription().isEmpty()) {
                existingTask.setDescription(task.getDescription());
            }

            if(task.getStatus() != null && !task.getStatus().isEmpty()) {
                existingTask.setStatus(task.getStatus());
            }

            if(task.getPriority() != null && !task.getPriority().isEmpty()) {
                existingTask.setPriority(task.getPriority());
            }

            if(task.getTitle() != null && !task.getTitle().isEmpty()) {
                existingTask.setTitle(task.getTitle());
            }
            return taskRepository.save(existingTask);
        } catch (Exception e) {
            throw new Exception("Error updating task! 🥺", e);
        }
    }

}
