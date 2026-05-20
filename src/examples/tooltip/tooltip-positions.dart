import 'package:flutter/material.dart';

class TooltipPositions extends StatelessWidget {
  const TooltipPositions({super.key});

  Widget _btn(String label, TooltipDirection dir) {
    return Tooltip(
      message: 'Tooltip $label',
      preferBelow: dir == TooltipDirection.below,
      decoration: BoxDecoration(
        color: const Color(0xFFF8785E), // --primary
        borderRadius: BorderRadius.circular(4), // --radius-small
      ),
      textStyle: const TextStyle(
        fontFamily: 'Lexend', fontSize: 12, color: Colors.white,
      ),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          border: Border.all(color: const Color(0xFFEBE9E8)), // --border
          borderRadius: BorderRadius.circular(8), // --radius-medium
          color: Colors.white,
        ),
        child: Text(label, style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B))),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 16,
      runSpacing: 16,
      alignment: WrapAlignment.center,
      children: [
        _btn('top', TooltipDirection.up),
        _btn('right', TooltipDirection.right),
        _btn('bottom', TooltipDirection.below),
        _btn('left', TooltipDirection.left),
      ],
    );
  }
}
