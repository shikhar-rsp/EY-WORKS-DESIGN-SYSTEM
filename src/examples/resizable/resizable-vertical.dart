import 'package:flutter/material.dart';

class ResizableVertical extends StatelessWidget {
  const ResizableVertical({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(maxWidth: 576),
      height: 300,
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(16), // --radius-large
      ),
      clipBehavior: Clip.hardEdge,
      child: Column(
        children: [
          Expanded(
            flex: 60,
            child: Center(
              child: Text(
                'Top Panel',
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
            height: 1,
            color: const Color(0xFFEBE9E8), // --border
          ),
          Expanded(
            flex: 40,
            child: Center(
              child: Text(
                'Bottom Panel',
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
