import 'package:flutter/material.dart';

class InputOtpInvalid extends StatelessWidget {
  const InputOtpInvalid({super.key});

  Widget _buildSlot(String value, {bool isFirst = false, bool isLast = false}) {
    return SizedBox(
      width: 40,
      height: 40,
      child: Container(
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          border: Border(
            top: const BorderSide(color: Color(0xFFCC0000)), // --destructive
            bottom: const BorderSide(color: Color(0xFFCC0000)),
            right: const BorderSide(color: Color(0xFFCC0000)),
            left: isFirst
                ? const BorderSide(color: Color(0xFFCC0000))
                : BorderSide.none,
          ),
          borderRadius: isFirst
              ? const BorderRadius.only(
                  topLeft: Radius.circular(8),
                  bottomLeft: Radius.circular(8),
                )
              : isLast
                  ? const BorderRadius.only(
                      topRight: Radius.circular(8),
                      bottomRight: Radius.circular(8),
                    )
                  : BorderRadius.zero,
          boxShadow: [
            BoxShadow(
              color: const Color(0xFFCC0000).withOpacity(0.3),
              blurRadius: 0,
              spreadRadius: 2,
            ),
          ],
        ),
        child: Text(
          value,
          style: const TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.w500,
            color: Color(0xFF2E2B2B), // --foreground
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        _buildSlot('1', isFirst: true),
        _buildSlot('2'),
        _buildSlot('', isLast: true),
        const SizedBox(width: 12),
        const Icon(Icons.more_horiz, size: 14, color: Color(0xFF7A7272)),
        const SizedBox(width: 12),
        _buildSlot('', isFirst: true),
        _buildSlot(''),
        _buildSlot('', isLast: true),
      ],
    );
  }
}
