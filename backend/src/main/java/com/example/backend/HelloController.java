package com.example.backend;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HelloController {

    @GetMapping("/api/calculate")
    public ResponseEntity<?> calculate(
            @RequestParam("a") double a,
            @RequestParam("b") double b,
            @RequestParam("operation") String operation) {

        if (!Double.isFinite(a) || !Double.isFinite(b)) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Enter valid finite numbers."));
        }

        double result;

        switch (operation) {
            case "add":
                result = a + b;
                break;

            case "subtract":
                result = a - b;
                break;

            case "multiply":
                result = a * b;
                break;

            case "divide":
                if (b == 0) {
                    return ResponseEntity.badRequest()
                            .body(Map.of("error", "Cannot divide by zero."));
                }
                result = a / b;
                break;

            default:
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Unknown operation."));
        }

        if (!Double.isFinite(result)) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "The result is too large."));
        }

        return ResponseEntity.ok(Map.of("result", result));
    }
}