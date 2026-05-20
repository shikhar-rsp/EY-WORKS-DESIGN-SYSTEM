import 'package:flutter/material.dart';

class InputOtpDefault extends StatefulWidget {
  const InputOtpDefault({super.key});

  @override
  State<InputOtpDefault> createState() => _InputOtpDefaultState();
}

class _InputOtpDefaultState extends State<InputOtpDefault> {
  final List<TextEditingController> _controllers =
      List.generate(6, (_) => TextEditingController());
  final List<FocusNode> _focusNodes = List.generate(6, (_) => FocusNode());

  @override
  void dispose() {
    for (final c in _controllers) c.dispose();
    for (final f in _focusNodes) f.dispose();
    super.dispose();
  }

  Widget _buildSlot(int index, {bool isFirst = false, bool isLast = false}) {
    return SizedBox(
      width: 40,
      height: 40,
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          border: Border(
            top: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
            bottom: const BorderSide(color: Color(0xFFADA5A5)),
            right: const BorderSide(color: Color(0xFFADA5A5)),
            left: isFirst
                ? const BorderSide(color: Color(0xFFADA5A5))
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
        ),
        child: TextField(
          controller: _controllers[index],
          focusNode: _focusNodes[index],
          maxLength: 1,
          textAlign: TextAlign.center,
          keyboardType: TextInputType.number,
          decoration: const InputDecoration(counterText: '', border: InputBorder.none),
          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B)),
          onChanged: (val) {
            if (val.isNotEmpty && index < 5) {
              _focusNodes[index + 1].requestFocus();
            }
          },
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        _buildSlot(0, isFirst: true),
        _buildSlot(1),
        _buildSlot(2, isLast: true),
        const SizedBox(width: 12),
        const Icon(Icons.more_horiz, size: 14, color: Color(0xFF7A7272)), // --muted-foreground
        const SizedBox(width: 12),
        _buildSlot(3, isFirst: true),
        _buildSlot(4),
        _buildSlot(5, isLast: true),
      ],
    );
  }
}
