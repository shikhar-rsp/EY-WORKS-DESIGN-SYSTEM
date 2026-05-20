import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(home: Scaffold(body: Center(child: InputNumberDisabled()))));
}

class InputNumberDisabled extends StatelessWidget {
  const InputNumberDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: 0.5,
      child: IgnorePointer(
        child: Container(
          height: 36,
          decoration: BoxDecoration(
            color: const Color(0xFFFFFFFF),
            border: Border.all(color: const Color(0xFFEBE9E8)),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Decrement button (disabled)
              _DisabledStepButton(icon: Icons.remove, isLeft: true),
              // Field (disabled)
              SizedBox(
                width: 56,
                child: TextField(
                  controller: TextEditingController(text: '5'),
                  textAlign: TextAlign.center,
                  enabled: false,
                  style: const TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    color: Color(0xFF2E2B2B),
                  ),
                  decoration: const InputDecoration(
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.symmetric(horizontal: 8),
                    isDense: true,
                    disabledBorder: InputBorder.none,
                  ),
                ),
              ),
              // Increment button (disabled)
              _DisabledStepButton(icon: Icons.add, isLeft: false),
            ],
          ),
        ),
      ),
    );
  }
}

class _DisabledStepButton extends StatelessWidget {
  final IconData icon;
  final bool isLeft;

  const _DisabledStepButton({required this.icon, required this.isLeft});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 32,
      height: double.infinity,
      decoration: BoxDecoration(
        border: isLeft
            ? const Border(right: BorderSide(color: Color(0xFFEBE9E8)))
            : const Border(left: BorderSide(color: Color(0xFFEBE9E8))),
      ),
      child: Icon(
        icon,
        size: 14,
        color: const Color(0xFF7A7272),
      ),
    );
  }
}
