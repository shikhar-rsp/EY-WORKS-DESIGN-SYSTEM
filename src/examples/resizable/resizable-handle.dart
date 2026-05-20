import 'package:flutter/material.dart';

class ResizableWithHandle extends StatelessWidget {
  const ResizableWithHandle({super.key});

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
                style: const TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: Color(0xFF505258), // --secondary-foreground
                  fontFamily: 'Lexend',
                ),
              ),
            ),
          ),
          // Grip handle
          SizedBox(
            width: 1,
            child: Stack(
              alignment: Alignment.center,
              clipBehavior: Clip.none,
              children: [
                Container(color: const Color(0xFFEBE9E8)), // --border
                Positioned(
                  child: Container(
                    width: 12,
                    height: 16,
                    decoration: BoxDecoration(
                      color: const Color(0xFFEBE9E8), // --border
                      border: Border.all(color: const Color(0xFFEBE9E8)),
                      borderRadius: BorderRadius.circular(4), // --radius-small
                    ),
                    child: const Icon(
                      Icons.drag_indicator,
                      size: 10,
                      color: Color(0xFF505258), // --secondary-foreground
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: Center(
              child: Text(
                'Panel Two',
                style: const TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: Color(0xFF505258), // --secondary-foreground
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
