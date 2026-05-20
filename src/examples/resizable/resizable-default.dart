import 'package:flutter/material.dart';

class ResizableDefault extends StatelessWidget {
  const ResizableDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(maxWidth: 576),
      height: 200,
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(16), // --radius-large
      ),
      clipBehavior: Clip.hardEdge,
      child: Row(
        children: [
          Expanded(
            child: Center(
              child: Text(
                'Panel One',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: const Color(0xFF505258), // --secondary-foreground
                  fontFamily: 'Lexend',
                ),
              ),
            ),
          ),
          Container(
            width: 1,
            color: const Color(0xFFEBE9E8), // --border
          ),
          Expanded(
            child: Center(
              child: Text(
                'Panel Two',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: const Color(0xFF505258), // --secondary-foreground
                  fontFamily: 'Lexend',
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
