import 'package:flutter/material.dart';

class UploadingError extends StatelessWidget {
  const UploadingError({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 360,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFCC0000)),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  color: const Color(0xFFFFE5E5),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: const Icon(
                  Icons.error_outline,
                  size: 18,
                  color: Color(0xFFCC0000),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      'Untitled File.pdf',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w500,
                        color: Color(0xFF1A1A1A),
                      ),
                    ),
                    SizedBox(height: 2),
                    Text(
                      '5.4 MB of 18MB · Error...',
                      style: TextStyle(
                        fontSize: 11,
                        color: Color(0xFFCC0000),
                      ),
                    ),
                  ],
                ),
              ),
              IconButton(
                onPressed: null,
                icon: const Icon(Icons.close, size: 14),
                color: const Color(0xFF6B7280),
                padding: const EdgeInsets.all(4),
                constraints: const BoxConstraints(),
              ),
            ],
          ),
          const SizedBox(height: 8),
          ClipRRect(
            borderRadius: BorderRadius.circular(99),
            child: LinearProgressIndicator(
              value: 0.3,
              minHeight: 4,
              backgroundColor: const Color(0xFFF4F4F4),
              valueColor:
                  const AlwaysStoppedAnimation<Color>(Color(0xFFCC0000)),
            ),
          ),
          const SizedBox(height: 6),
          const Text(
            'Upload failed. Please try again.',
            style: TextStyle(fontSize: 11, color: Color(0xFFCC0000)),
          ),
        ],
      ),
    );
  }
}
