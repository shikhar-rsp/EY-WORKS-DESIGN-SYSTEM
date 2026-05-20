import 'package:flutter/material.dart';

// Note: This is a simplified visual mockup of the controlled TimePicker trigger.
// The full scrollable column picker behavior requires a dedicated Flutter widget implementation.

class TimePickerControlled extends StatefulWidget {
  const TimePickerControlled({super.key});

  @override
  State<TimePickerControlled> createState() => _TimePickerControlledState();
}

class _TimePickerControlledState extends State<TimePickerControlled> {
  String _value = '09:00';

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Trigger button
          Container(
            height: 36,
            padding: const EdgeInsets.symmetric(horizontal: 12),
            decoration: BoxDecoration(
              color: const Color(0xFFFFFFFF), // --background
              borderRadius: BorderRadius.circular(8), // --radius-medium
              border: Border.all(color: const Color(0xFFEBE9E8)), // --border
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Clock icon
                Icon(
                  Icons.access_time,
                  size: 14,
                  color: const Color(0xFF7A7272), // --muted-foreground
                ),
                const SizedBox(width: 8),
                Text(
                  _value,
                  style: const TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    color: Color(0xFF2E2B2B), // --foreground
                  ),
                ),
                const SizedBox(width: 4),
                // Chevron icon
                Icon(
                  Icons.keyboard_arrow_down,
                  size: 14,
                  color: const Color(0xFF7A7272), // --muted-foreground
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          // Value display
          RichText(
            text: TextSpan(
              style: const TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                color: Color(0xFF7A7272), // --muted-foreground
              ),
              children: [
                const TextSpan(text: 'Selected: '),
                TextSpan(
                  text: _value,
                  style: const TextStyle(
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF2E2B2B), // --foreground
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
